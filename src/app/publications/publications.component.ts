import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorNamePipe } from '../pipes/author-name.pipe';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { BibtexModalComponent } from '../bibtex-modal/bibtex-modal.component';
import {formatBibTeX} from "../utils/bibtex-formatter";

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [
    CommonModule,
    AuthorNamePipe
  ],
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  publications = [
    {
      date: '2021-09-06',
      title: 'Hans: Ide-based editing support for embedded feature annotations',
      authors: 'Johan Martinson, Herman Jansson, Mukelabai Mukelabai, Thorsten Berger, Alexandre Bergel, Truong Ho-Quang',
      description: 'When developers maintain or evolve software, they often need to\n' +
        'know the locations of features. This proves challenging when the\n' +
        'feature locations are not documented, when the code was written\n' +
        'by different developers who may have left the organization, or\n' +
        'when the developer’s memory of the implementation has faded.\n' +
        'Automated feature location techniques are hard to adopt in practice,\n' +
        'especially since they boast too many false positives. To address these\n' +
        'challenges, embedded feature annotations have been proposed to\n' +
        'allow developers to trace features in code during development with\n' +
        'minimal effort. However, tool support is needed for developers to\n' +
        'effectively record and use these annotations. We propose HAnS as a\n' +
        'tool to meet this need; it is implemented as an IntelliJ IDE plugin to\n' +
        'support developers seamlessly record feature locations while they\n' +
        'write their code. HAnS supports developers when mapping features\n' +
        'to software assets, such as files and code fragments, with code\n' +
        'completion and syntax highlighting. It also provides functionality to\n' +
        'browse feature definitions and locations, as well as refactor features.\n' +
        'A demo video is available at https://youtu.be/cx_-ZshHLgA.',
      link: 'assets/Publications/HAnS-IDE-Based-Editing-Support-for-Embedded-Feature-Annotations.pdf',
      doi: '10.1145/3461002.3473072'
    },
    {
      date: '2024-09-02',
      title: 'An IDE Plugin for Clone Management',
      authors: 'Ahmad Al Shihabi, Jan Sollmann, Johan Martinson, Wardah Mahmood, Thorsten Berger',
      description: 'Development and maintenance in variant-rich systems often involves the replication of specific software code, known as software\n' +
        'cloning. This process allows for code reuse but presents challenges\n' +
        'in managing independently evolving variants. This paper discusses\n' +
        'the necessity of effective clone management tools to maintain code\n' +
        'quality and efficiency. We present an extension1\n' +
        'to the HAnS IDE\n' +
        'plugin. This extension enhances the plugin by supporting basic\n' +
        'clone management, and by facilitating the tracking and synchronization of cloned assets and features through a well-designed,\n' +
        'lightweight trace database. The plugin is evaluated through unit\n' +
        'and integration testing, as well as user experiments, demonstrating its effectiveness in addressing the challenges associated with\n' +
        'software cloning. The evaluation results indicate that 80% of participants rated the trace database as intuitive, and 100% rated the\n' +
        'notification system as both intuitive and user-friendly.\n',
      link: 'assets/Publications/An-IDE-Plugin-for-Clone-Management.pdf',
      doi: '10.1145/3646548.3678298'
    },
    {
      date: '2021-06-24',
      title: 'MSc Thesis -->' +
        ' Hans: Ide-based editing support for embedded feature annotations',
      authors: 'Johan Martinson, Herman Jansson',
      description: 'One of the most common and widespread activities among software developers is locating features (Krüger, Berger, & Leich, 2019). However, feature location is a costly activity that is challenging and takes considerable effort to perform, as records of a features’ explicit location are rarely kept. In this thesis, HAnS is presented, a plugin for IntelliJ with editing support for embedding feature annotations in source code during development, as embedding feature annotations is shown to be a cheap and reliable way to keep track of feature locations. To implement the plugin, a design science methodology was adopted where we performed user studies to find what features would make HAnS effective. The results of the user studies show that the most important functionality of HAnS is its support for writing feature annotations through convenient code completion, refactoring and navigation of features. The user studies also found that HAnS was effective at reducing the errors created during development that require correction later on. The major drawback of HAnS is its refactoring performance which is slow in larger projects. From these results, we draw the conclusion that the plugin is effective for its purpose, but that further research is needed in the form of a longitudinal study where long term use data is gathered. We also suggest further development to extend the plugin’s functionality.',
      link: 'assets/Publications/MSCThesis-Jansson-Martinsson.pdf',
      doi: '10.1145/3461002.3473072'
    },
  ];

  constructor(private dialog: MatDialog) {
    this.sortPublicationsByDate();
  }

  sortPublicationsByDate() {
    this.publications.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  async fetchBibtex(doi: string) {
    const url = `https://api.crossref.org/works/${encodeURIComponent(doi)}/transform/application/x-bibtex`;
    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/x-bibtex'
        }
      });

      if (!response.ok) {
        throw new Error(`Error fetching BibTeX: ${response.statusText}`);
      }

      const bibtex = await response.text();
      const formattedBibTex = formatBibTeX(bibtex);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = { bibtex: formattedBibTex };
      dialogConfig.width = 'auto';
      dialogConfig.height = 'auto';
      dialogConfig.position = { top: '10px' };
      dialogConfig.panelClass = 'custom-dialog-container';

      // Close any open dialogs before opening a new one
      if (this.dialog.openDialogs.length > 0) {
        this.dialog.closeAll();
      }

      this.dialog.open(BibtexModalComponent, dialogConfig);
    } catch (error) {
      console.error(error);
    }
  }
}
