const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Your Organization. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer



