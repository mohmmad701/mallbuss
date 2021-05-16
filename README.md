# mallbuss

  <!--Practice domain modeling by planning out an app w that allows users to choose their favorite between two goats
  Let students participate by suggesting the steps needed to make the app run
  Continue until students have provided enough detail that they feel confident they could build the app themselves
  App Flow:
  - Welcome and instructions
  - Randomly put 2 goats on the screen
    - Random number generator
    - a function to display goats
  - A user clicks on a goat
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 10 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which goat was clicked on
        - update click images count of how many times it has been clicked on
        - update both images count of times shown
        - Randomly Pick 2 goats, run the same code that put them on the screen to begin with
  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
    - let the user know what they are supposed to do
      - instructions
  More javascript details
  We need Objects with all the image properties
  const Image = function ()
  {
    name : 'cool goat',
    clicks: 0,
    times shown: 0,
    url : 'cool-goat.jpg'
  }
  We need an Array to hold all image Objects
  function to randomly pick an image{
    Prevent last picked goats from being picked
      - STRETCH pick all goats evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }
  click on an image, targeted by id
  add event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
    }
  })
  function to display all the clicks at the end () {
    generate a table or list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }
