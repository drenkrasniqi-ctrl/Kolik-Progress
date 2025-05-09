import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const LoginModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Transition show={isOpen} appear as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-4"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
              <Dialog.Title className="text-lg font-bold text-gray-900 mb-4">
                Log in to your account
              </Dialog.Title>
              <form className="space-y-4">
                <input type="email" placeholder="Email" className="w-full p-2 border rounded-md" />
                <input type="password" placeholder="Password" className="w-full p-2 border rounded-md" />
                <button className="w-full bg-gradient-to-r from-sky-500 to-purple-500 text-white py-2 rounded-md font-semibold hover:opacity-90">
                  Log in
                </button>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LoginModal;
