import React from 'react';

const MyReviewRow = ({ review }) => {
    const { _id, serviceName, customer, photoUrl, reviewMessage } = review;

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure, you want to delete this comment...??");
        if (proceed) {
            fetch(`http://localhost:5000/myReview/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }

    return (
        <div className="p-2 w-full">
            <div className="h-full flex items-center border-gray-400 border p-4 rounded-lg">
                <div>
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={photoUrl} />
                    <h2 className="text-gray-900 title-font font-medium">{customer}</h2>
                </div>
                <div className="flex-grow">
                    <h2 className=" text-2xl font-semibold text-gray-800">{serviceName}</h2>
                    <p className='text-lg'>{reviewMessage}</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <button className="inline-block rounded-3xl bg-gray-600 px-2 py-2 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500">
                        Update
                    </button>
                    <button onClick={() => handleDelete(_id)} className="inline-block rounded-3xl bg-gray-600 px-2 py-2 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewRow;