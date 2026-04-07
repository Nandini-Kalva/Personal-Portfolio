const Nav = () =>{
return(
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
         <h1 className="text-2xl font-bold text-blue-500">Nandini</h1>
         <ul className="hidden md:flex gap-10 text-gray-700 font-medium">
            <li> <a href="#">Home</a> </li>
            <li> <a href="#Projects">Projects</a> </li>
            <li> <a href="#Skills">Skills</a> </li>
            <li> <a href="#Contact">Contact</a> </li> 
         </ul>
        </div>
    </nav>
)
}
export default Nav 
  