# Build-Week-1

#Creating A Party Planner App

Fun Bus is a travel agency looking for some help on their website.  They want a new navigation, new header, and new buttons on the home page. They also want a mobile version of their site styled.  Use your preprocessing knowledge to accomplish their tasks.

## Task 1: Set Up The Project With Git

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository.
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
 
## Task 2: Set up your preprocessor
* [ ] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your team lead for help.
* [ ] Open your terminal and navigate to your preprocessing project by using the `cd` command
* [ ] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`
* [ ] Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.
* [ ] Once you see the red screen, you can delete that style and you're ready to start on the next task

## Task 3: Import LESS Files

* [ ] Navigate to your `index.less` file. Notice the file is blank.  In order for you to see the styles for this project you must import them in a certain order.  That order is as follows:

1. `variables.less`
2. `mixins.less`
3. `reset.less`
4. `global.less`
5. `navigation.less`
6. `footer.less`
7. `home-page.less`

## Stretch Goals: 
 Add the ability to connect with your facebook account to add party attendees by your list of friends and send a facebook invite.



