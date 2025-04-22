import { useState } from 'react';
import { Chat } from './components/Chat';
import { Modal } from './components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-purl min-h-screen">
      <nav className="py-12">
        <div className="max-w-7xl mx-auto flex space-x-4 justify-between items-center text-purl-2">
          <div>
            <a href="#" className="font-semibold px-4 text-sm">
              Home
            </a>
            <a href="#" className="font-semibold px-4 text-sm">
              About
            </a>
            <a href="#" className="font-semibold px-4 text-sm">
              Contact
            </a>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="text-sm font-semibold bg-purl-3 px-3.5 py-2 rounded-xl hover:opacity-80 mr-4"
          >
            Call Jessica
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4">
        <div className=" py-8">
          <h1 className="text-8xl font-bold mb-4 text-purl-2 leading-30">
            Solving problems. Thousands at a time.
          </h1>
          <p className="text-purl-2 font-semibold tracking-wide">
            It is a long
            <strong className="font-bold">
              established fact that a reader
            </strong>
            will be distracted by the readable content of a page when looking at
            its layout. It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal{' '}
            <strong className="font-bold">distribution of letters</strong>, as
            opposed to using 'Content here, content here', making it look like
            readable English.
          </p>
        </div>
      </main>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-sm font-semibold mb-2 text-purl-2">
          Calling Jessica
        </h2>
        <div className="p-0 text-purl-2">
          <Chat />
        </div>
      </Modal>
    </div>
  );
}

export default App;
