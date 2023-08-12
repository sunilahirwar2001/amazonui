import React from 'react';

const Registry = () => {
  const occasions = [
    {
      image: 'https://cdn0.weddingwire.in/article/6907/3_2/960/jpg/117096-cineloveproductions-338194964-602912318521235-4179400654672091741-n.jpeg',
      caption: 'Getting Married'
    },
    {
      image: 'https://cms-tc.pbskids.org/parents/_pbsKidsForParentsSixteenNineRatioSmall/age-by-age-birthday.jpg',
      caption: 'Welcoming Baby'
    },
    {
      image: 'https://www.dogseechew.in/storage/editor_6322b3859adbf-dog-birthday-party-treats.webp',
      caption: 'Celebrating a Pet Birthday'
    },
    {
      image: 'https://png.pngtree.com/png-clipart/20221224/original/pngtree-happy-birthday-text-effect-png-image_8802415.png',
      caption: 'Birthday Celebration'
    },
    // Add more occasions and images here
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow rounded">
        <h1 className="text-3xl font-semibold mb-4">Registry</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {occasions.map((occasion, index) => (
            <div key={index} className="relative">
              <img
                className="w-full h-auto rounded-lg"
                src={occasion.image}
                alt={occasion.caption}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-semibold bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                {occasion.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Registry;
