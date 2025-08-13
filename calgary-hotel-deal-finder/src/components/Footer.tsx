export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Calgary Hotel Finder. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">
          Made with ❤️ by an AI assistant.
        </p>
      </div>
    </footer>
  );
}
