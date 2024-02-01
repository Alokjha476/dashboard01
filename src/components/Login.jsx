const Login = () => {
  return (
    <div className="pt-10">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="border border-current rounded-3xl w-full md:w-4/12 absolute p-10 md:p-12 bg-gray-100 my-0 md:my-1 mx-auto right-0 left-0  opacity-80"
      >
        {/* <p className="text-black font-bold text-xl md:text-3xl pt-10 md:py-4">Sign In</p> */}
        <div className="flex text-blue-600 mb-4">
          <div className=" p-1 rounded-lg  border border-gray-500 bg-blue-100 w-28">
            <input type="radio" id="employee" name="name1" />
            <label htmlFor="employee"> Employee</label>
          </div>
          <div className="ml-28 p-1 rounded-lg border border-gray-500 bg-blue-100 w-28">
            <input type="radio" id="admin" name="name1" />
            <label htmlFor="admin"> Admin</label>
          </div>
        </div>
        <label className="font-bold text-black" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="p-2 md:p-4 my-4 w-full rounded-lg text-black border border-gray-500 custom-transition shadow appearance-none py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:shadow-blue-300"
        />
        <label className="font-bold text-black" htmlFor="pass">
          Password
        </label>
        <input
          type="password"
          id="pass"
          placeholder="Password"
          className="p-2 md:p-4 my-4 w-full rounded-lg text-black border border-gray-500 custom-transition shadow appearance-none py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:shadow-blue-300"
        />
        <button className="font-bold text-xl p-2 md:p-4 my-2 md:my-4 bg-blue-600 hover:bg-blue-700 transition-all w-full rounded-lg">
          Sign in
        </button>
        <p className="md:px-10 px-2 py-2 md:py-2 font-semibold text-xs">
          <span className="opacity-70">Forgotten password? </span>
          <span className="cursor-pointer hover:underline">
            Forget Password
          </span>
        </p>
      </form>
    </div>
  );
};
export default Login;
