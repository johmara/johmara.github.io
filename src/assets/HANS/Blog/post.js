module.exports = {
    data: () => (
        [
            {
                date: '16-04-2021',
                title: "A month Later",
                subtitle: "",
                image: "",
                text: [
                    `A lot of the parts that are absolutley crucial for the plugin is now functional. However, there are still features
                    that are needed before the plugin could be deemed good enough to publish. At the moment we are working on referencing
                    the features from all different parts of the embedded feature annotation language and creating a structure view where 
                    adding new features and removing features are enabled. In short the first user study was postponed for a bit but we 
                    are now back on track and soon ready for it to be conducted.
                    `,
                    `
                    Allting gott!
                    `,
                    `< Johan & Herman >`
                ]
            },
            {
                date: '12-03-2021',
                title: "Finally weekend",
                subtitle: "",
                image: "",
                text: [
                    `After a long week we welcome the weekend with open arms! During the week we worked with implementing
                    code completion and syntax highlighting. We also prepped a github repo for a Snake game that will be used
                    for the user studies and came up with a couple of questions to ask and tasks to be completed. At the end
                    of the week, during supervision, we got valueable feedback on our work so far and the plan for the coming 
                    few weeks. 
                    `,
                    `We'll keep you updated, but right now we're signing off for the week!
                    `,
                    `< Johan & Herman >`
                ]
            },
            {
                date: '5-03-2021',
                title: "Partial code completion",
                subtitle: "",
                image: "",
                text: [
                    `As planned, this week has been spent coding the plugin for the demo that was shown to the 
                    supervisors. So far all the grammars are working as expected with the exception of the code annotations
                    that we still need to figure out how to recognise in the code. Many attempts have been made to fix this
                    and we still have a few tricks up our sleeves to try. We have, however, added code completion for certain
                    contexts and will implement it for the other contexts in the time to come. In short, the demo showed the 
                    plugin as it is now, how we implemented it and how we will proceed.
                    `,
                    `As the project now is approaching the time for the first iteration of our user studies, the nearest 
                    future will consist of making the plugin ready for evaluation and specifying the studies. The plugin
                    will not by any means be complete but the core functionality will be there to get the optimal feedback.
                    Next week we hope to write about a working solution for detecting code annotations!
                    `,
                    `< Johan & Herman >`
                ]
            },
            {
                date: '26-02-2021',
                title: "A Face to Show the World",
                subtitle: "",
                image: require("@/assets/HANS/Blog/HANSLogoFull.png"),
                text: [
                    ` 
                    This week the planning has been good to fall back on we have created a logo, started contructing
                    the user studies, written the start of the report and kept a time-box structure for writing code.
                    The code comment feature annotations are still not moving forward. However, we have found two 
                    ways different that we could work around the problem with elements inside PSIComments which would 
                    provide some sort of solution. The report is now set up correctly with all the information that the
                    university requires and we have started writing it. 
                    `,
                    `
                    The user studies have, after discussion, been decided to be done in the following way. A software
                    project will be given to the subjects with a specific set of tasks aiming for the students to 
                    test out all the implemented, and not yet implemented, features of the plugin. After the subject
                    have completed the tests they will fill out a form describing or rating how well the features 
                    worked and if there are any features that they would like to have seen which are not there. 
                    `,
                    `
                    Next week will involve a lot of coding as we will prepare a demo to present at the end of the week 
                    to the supervisors. The idea is to show what is implemented and working so far. To do this we have 
                    come up with a potential solution for feature annotations in comments, if we cannot inject language 
                    in comments. The plan is to manually parse comments for code completion and highlighting and use 
                    FAXE for refactoring. 
                    `,
                    `< Johan & Herman >`
                ]
            },
            {
                date: '19-02-2021',
                title: "One of those weeks",
                subtitle: "Turtling forwards",
                image: "",
                text: [
                    ` 
                    This week has gone by slower than expected as the sense of progress has been low. We set out find a 
                    way to inject code but have not come further than ideas for investigation. Instead, we have looked a bit 
                    into testing and also discussed the logotypes which a friend will help design. We believe the reason for
                    the week going slow has largely been due to the fact that we did not have a structured approach for the 
                    tasks we set out to do. 
                    `,
                    `
                    For the upcoming week, we therefore have defined more concretely what subtasks we intend to accomplish. 
                    Hopefully, this will help to facilitate a productive work week. Our plan is to work on the report, define
                    the user studies and to finally solve how to add elements to PSIComments in IntelliJ. 
                    `,
                    `< Johan & Herman >`
                ]
            },
            {
                date: '12-02-2021',
                title: "Three languages and a half",
                subtitle: "Implementing the object model by specifying languages to IntelliJ",
                image: "",
                text: [
                    ` 
                    Time is moving quickly and it is weekend again already! The current week has consisted mostly of coding
                    in order to make IntelliJ recognise the grammar and language of the embedded annotations. To acheive this, 
                    the IntelliJ plugin development tutorial has been a great resource. We managed to specify the languages 
                    for the three file types that will be used, namely .feature-model, .feature-to-folder and .feature-to-file. 
                    These files are now indentified by IntelliJ with the proper elements and syntax, using the PSI that will 
                    crucial further on. 
                    `,
                    `
                    The reason for "three and a half" and not four languages is that the embedded annotations within comments 
                    has been a bit trickier to implement. Since these annotations will exist within other file types we must 
                    find a way to inject a language in comments, independent of file type. For this, we have specified the 
                    language in a bnf and flex file as mentioned last week, so that it is its own language. For language
                    injection, we have intial ideas about extending the PSI comment object or possibly to parse the comments 
                    manually.    
                    `,
                    `
                    Our plan for next week is partly to find a way to inject code annotations in comments of any file type. 
                    When this is working we will have the basis to continue with features that depend on these code annotations.
                    Alongside this, we will start working on connecting PSI elements between files so features in the feature
                    model may be associated with their implementations. In contrast to the code tasks mentioned we also intend 
                    to design a logotype for the plugin and start preparing the user studies. 
                    `,
                    `
                    Cheers! 
                    `,
                    `< Johan & Herman >`
                ]
            },
            {
                date: '05-02-2021',
                title: "Object model and grammar",
                subtitle: "The realisation that will help continued development",
                image: require("@/assets/HANS/Blog/ObjectModel.png"),
                text: [
                    ` 
                    During the week we had three things on the agenda, creating the object model, specifying the requirements
                    and going to Charm (Chalmers jobfair). The object model is a mix of the model described by Tobias Schwarz in
                    the FAXE specification and how we have found IntelliJ to work during the tutorial and through the documentation.
                    In IntelliJ IDE plugins you have to specify a .bnf (Bachus Normal Form) file and a .flex file to be able to 
                    generate a parser for the context free grammar and the lexer to recognise the lexical patterns of the grammar. 
                    The object model it self can be split in to 3 parts. One describes the in file annotations in the form of
                    a line key, a block key, a value (the feature to be mapped) and the separators (opening and closing bracket). The
                    following parts describe the mapping from a .feature-to-folder file and a .feature-to-file file, but they are all 
                    comprised of keys, values and separators. 
                    `,
                    `  
                    After creating the model, with insight from our supervisor Mukelabai, we started trying to implement a mockup of the
                    syntax highlighting. From that we have taken with us that we need to get the grammar correct first so that it can 
                    be used successfully in the continued development of the plugin.
                    `,
                    `  
                    As mentioned last time, we have spent some time this week on specifying requirements by rewriting them as user 
                    stories with definitions of done. Later, when implementing these user stories we will split them up into smaller 
                    tasks that need to be done in order to finish the feature. After that we can compare the result with the definition 
                    of done and ultimately evaluate the features in our user studies.
                    `,
                    `
                    The coming week we will focus on using the definition of a feature and the language and file type of the 
                    .feature-model. With the reasoning that it will aid following user stories.
                    `,
                    `< Johan & Herman >`
                ]
            },
            {
                date: '29-01-2021',
                title: "Two steps forwards one step back",
                subtitle: "Finishing tutorials, defining requirements & missunderstanding supervisors",
                image: "",
                text: [
                    ` 
                    In the beginning of this week we focused to get the tutorials about creating a code completion plugin in
                    IntelliJ. The tutorial provide excellent help as they make an effort to introduce the programmer to various
                    features that a developer of a plugin might need. The tutorial is made by giving step by step instructions
                    for extending functionallity for the IDE. The most important knowledge from the tutorial is that IntelliJ
                    plugins seems to be highly modular, where a new functionallity (feature) can easily be added by providing the 
                    implementation in the generated plugin.xml file. We have also learned quite a bit about different types of 
                    extentions and a small amount about actions.
                    `,
                    ` 
                    During the week we had set a focus to define some requirements and after learning from the tutorials we were 
                    able to come up with a good list. The most important requirement was agreed, with the supervisors, to be 
                    "Syntax highlighting for the annotations". Some other features that sounds apealing is to enable a quick fix 
                    if a feature does not already exist in the .feature-model by pressing 'alt + return' and to provide completion 
                    option on what feature name to add, based on features from the feature model.
                    `,
                    `We finished the week by having a discussion with a group of bachelor students on how to collaborate, since 
                    they are writing a thesis about visualisations of features. The plan is to develop separate plugins where we 
                    focus on editing support while they work on visualisations.`
                    ,
                    `During the coming week, we will finish an object model that will describe the grammar that the plugin will 
                    use and depend on. This is the same task as we had this week, however, we misunderstood what the object model 
                    should describe. Our first thought was that it would describe the plugin structure but after the meeting today
                    it seemed more clear. On monday we will also get another clarification on this issue. 
                    After this, we will give a short presentation to the supervisors and the bachelor group on 
                    what we have found so far and how plugin development for IntelliJ works. The third and final objective is to 
                    specify the requirements according to what tasks that need to be done and a definition of done. `
                    ,
                    `Peace out homies!`,
                    `< Johan & Herman >`
                ]
            },
            {
            date: '22-01-2021',
            title: "Gaining domain knowledge",
            subtitle: "First week down, many to go!",
            image: "",
            text: [
                ` 
                 During this week we have focused on finding what useful tools that we have available to us in IntelliJs
                 plugin development and in FAXE. IntelliJ has a thorough guide that shows how to create a plugin which is 
                 quite easy to follow and gives us a better understanding of how it works. IntelliJ's documentation have also
                 proved to be useful for finding what version of Java (JDK-11) we need to use as well as dependency manager, code 
                 conventions and recomended plugins for development. The FAXE tool contains everything we need for now. 
                 As we learn more about it we might have new requirements regarding FAXE's endpoints. 
                `,
                `Next week we are rushing ahead to finish the tutorials on intellijs website and discuss the initial requirements of 
                the tool. After the requirements have been set we can move on towards creating an object model. Adding to these goals 
                reading and gaining better understanding of the available tools is also high on the list.`,
                `< Johan & Herman >`
                ]
            },
            {
            date: '15-01-2021',
            title: "Getting started!",
            subtitle: "",
            image: "",
            text: [
                ` 
                Exam week is comming to a close and the start of the project is inching closer. Our exams 
                ended earlier in the week so we have gotten a head start on the reading and group dynamics.
                We also got a start on the overarching planning of the next six months of our studies. The trello 
                board for userstories and tasks is also set up. We are just waiting for the institution to get back 
                to us regarding the proposal of the project and then we can get started for real!
                `,
                `We look forward to get going and start to read up on how plugins for intelliJ work and learning more 
                about feature annotation.`,
                `< Johan & Herman >`
                ]
            },
        ]
    )
}