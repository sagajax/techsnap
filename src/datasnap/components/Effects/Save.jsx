import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusCircleIcon } from 'lucide-react';
import { FaBookmark } from 'react-icons/fa6';
import image1 from "../../assets/rsc/radu-florin-4_QFycgpC4c-unsplash.jpg";
import image2 from "../../assets/rsc/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg";
import image3 from "../../assets/rsc/joshua-earle-ICE__bo2Vws-unsplash.jpg";
import image4 from "../../assets/rsc/arnold-francisca-nPhl2x4fk2s-unsplash.jpg";

const collections = [
  {
    name: 'Bikers',
    image: image1,
    privacy: 'Private',
  },
  {
    name: 'Moviesnap',
    image: image2,
    privacy: 'with Sampreeth Saka',
  },
  {
    name: 'Motiv',
    image: image3,
    privacy: 'Private',
  },
  {
    name: 'Style',
    image: image4,
    privacy: 'Private',
  },
  {
    name: 'Skincare',
    image: image1,
    privacy: 'Private',
  },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: '100%' },
  visible: { 
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 300,
      mass: 0.5
    }
  },
  exit: { 
    y: '100%',
    transition: {
      type: 'tween',
      duration: 0.2,
      ease: 'easeOut'
    }
  }
};

const CollectionItem = React.memo(({ image, name, privacy }) => (
  <div className="flex justify-between items-center py-2">
    <div className="flex items-center space-x-2 mb-2">
      <img
        src={image}
        alt={name}
        className="rounded-lg w-12 h-12 object-cover"
        loading="lazy"
      />
      <div className="flex flex-col">
        <span className="text-md font-semibold">{name}</span>
        <span className="text-sm">{privacy}</span>
      </div>
    </div>
    <PlusCircleIcon className="text-blue-600" />
  </div>
));

function Save({ isOpen, onClose, Image }) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 rounded-t-3xl z-50"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            layout
          >
            <div className="pt-4">
              <div className="py-2">
                <div className="w-8 h-1 bg-gray-900 dark:bg-gray-300 rounded-full mx-auto mb-2" />
                <div className="flex justify-between items-center px-6 mb-2">
                  <div className="flex items-center space-x-2">
                    <img src={Image} alt="" className="rounded-lg w-12 h-12 object-cover" />
                    <div className="flex flex-col">
                      <span className="text-md font-semibold">Saved</span>
                      <span className="text-sm">Private</span>
                    </div>
                  </div>
                  <FaBookmark />
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-black px-4">
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-md">Collections</span>
                  <span className="text-sm text-blue-600">New Collection</span>
                </div>

                <div className="max-h-[60vh] overflow-y-auto">
                  {collections.map((collection, index) => (
                    <CollectionItem
                      key={collection.name + index}
                      {...collection}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default React.memo(Save);