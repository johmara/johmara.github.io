import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorNamePipe } from '../pipes/author-name.pipe';

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
      bitexRef: '@inproceedings{martinson2021hans,\n' +
        '  title={Hans: Ide-based editing support for embedded feature annotations},\n' +
        '  author={Martinson, Johan and Jansson, Herman and Mukelabai, Mukelabai and Berger, Thorsten and Bergel, Alexandre and Ho-Quang, Truong},\n' +
        '  booktitle={Proceedings of the 25th ACM International Systems and Software Product Line Conference-Volume B},\n' +
        '  pages={28--31},\n' +
        '  year={2021}\n' +
        '}',
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
      bibtexRef: '@inproceedings{al2024ide,\n' +
        '  title={An IDE Plugin for Clone Management},\n' +
        '  author={Al Shihabi, Ahmad and Sollmann, Jan and Martinson, Johan and Mahmood, Wardah and Berger, Thorsten},\n' +
        '  booktitle={Proceedings of the 28th ACM International Systems and Software Product Line Conference},\n' +
        '  pages={42--45},\n' +
        '  year={2024}\n' +
        '}',
      doi: '10.1145/3646548.3678298'
    }
  ];

  constructor() {
    this.sortPublicationsByDate();
  }

  sortPublicationsByDate() {
    this.publications.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
}
