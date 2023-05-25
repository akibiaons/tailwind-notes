function App() {
  return ( /* <div> below is a container div, needed for ract to compile right. 
            There is also the className property or utility. This has min-h-screen, flex, flex-col, and text-white
             The min-h-screen ensures that the content located within the container <div> is verticaly aligned.*/
    <div className="min-h-screen flex flex-col text-white"> {/* The text white is self explanitory */}
    {/* flex & flex-col: flex makes the items within the div arrange themselves in a horzontal alignent side by side basically
        we can modify with flex-wrap, to control wrapping of items, justify-, and items-.*/}

    {/* flex-col on the other hand treats the flex container items to a vertical layout and renders items as a column
    This is useful for getting items to stack on each other. */}
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">{/* The pt-16 sets padding on top of an element */}
         {/* Container is similar to above, and it helps maintain a responsive layout. container class is usually a
         -pplied to a <div> that wraps your main content or layout sections.*/}
         <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Welcome to</h2> {/* This h2 text is used as the first half of the intro text for the homepage. */}
         <h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase mb-8">The Coding Club</h1>{/* This is the second half of the homepage intro. We utilize a text-3xl to make it bigger than the above h2 element text */}
         <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
           129,277 Members
         </div>
         <form action="https://www.getrevue.co/profile/tyler_potts_/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
           <div className="flex flex-col md:flex-row justify-center mb-4">
             <input className="text-lg md:text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0 outline-none" placeholder="E.g. eren.yeager@notatitan.com" type="email" name="member[email]" id="member_email"/>
             <input type="submit" value="Join today" name="member[subscribe]" id="member_submit" className="bg-primary rounded-full md:rounded-full md:rounded-tl-none md:rounded-bl-none text-large text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 cursor-pointer hover:opacity-75 duration-150"/>             
           </div>
           <div className="opacity-75 italic">
             By subscribing, you agree to the terms and conditions & our privacy policy.
           </div>
         </form>
      </main>{/* The container applies a horizontal padding of 16px or 1rem and adjust w/screen size. */}

      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">{/* The p-6 class sets up padding. The padding is applied to all sides of the element. */}
        <p>Built by Arthur F with <span className="text-green">0s and 1s</span></p>
        {/* In tailwind mx-auto means margin left auto, and margin right auto which makes even spaces between the elem
        -ents. Usually used within child containers. */}
        <div className="flex -mx-6">
         <a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a>
         <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a>
         <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App