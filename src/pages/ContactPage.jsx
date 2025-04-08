export function ContactPage() {
  return (
    <div className="ContactPage p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      
      <form className="max-w-xl mx-auto space-y-4 bg-white shadow-md p-6 rounded">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea 
          rows="4" 
          placeholder="Your Message" 
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        <button 
          type="submit" 
          className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
