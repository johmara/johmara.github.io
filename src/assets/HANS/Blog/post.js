module.exports = {
    data: () => (
        [
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
                    The comming week we will focus on using the definition of a feature and the language and file type of the 
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