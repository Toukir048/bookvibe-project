export function ErrorPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-pink-100 px-6">
      <div className="text-center animate-fadeIn">
        
        {/* Floating Ghost */}
        <div className="text-8xl animate-bounce mb-6">👻</div>

        {/* Animated 404 */}
        <h1 className="text-9xl font-extrabold text-indigo-500 animate-pulse">
          404
        </h1>

        <h2 className="mt-4 text-4xl md:text-6xl font-bold text-gray-800">
          Oops! You got lost in space 🚀
        </h2>

        <p className="mt-6 text-lg text-gray-500 max-w-md mx-auto">
          The page you're looking for took a vacation without telling us.
        </p>

        <div className="mt-10">
          <a
            href="/"
            className="inline-block rounded-xl bg-indigo-500 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-indigo-600 hover:scale-110 hover:rotate-2"
          >
            Take Me Home 🏠
          </a>
        </div>
      </div>
    </main>
  );
}

export default ErrorPage;