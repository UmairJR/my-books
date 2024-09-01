import React from 'react';
import { motion } from 'framer-motion';

const BookCard = ({ book }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden my-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img src={book.img} alt={book.title} className="md:w-1/3 h-auto object-cover" />
      <div className="p-4 md:w-2/3">
        <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
        <a href={book.author_desc}><h3 className="text-lg text-gray-600 mb-2">{book.author}</h3></a>
        <p className="text-sm text-gray-500 mb-2"><strong>Status:</strong> {book.status}</p>
        <p className="text-sm text-gray-500 mb-4">{book.desc}</p>
        <p className="text-sm text-gray-700"><strong>Genre:</strong> {book.genre}</p>
        <p className="text-sm text-gray-700 mt-4"><strong>Summary:</strong> {book.summary}</p>
      </div>
    </motion.div>
  );
};

export default BookCard;