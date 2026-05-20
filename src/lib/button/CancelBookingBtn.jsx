'use client';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const CancelBookingBtn = ({booking}) => {

    const router = useRouter();
    //sending delete request to backend
  const deleteBooking = async (id) => {
    const res = await fetch(`http://localhost:5000/myBookings/${id}`, {
        method: 'DELETE',
        
    });

    const data = await res.json();
     router.refresh();
};
    return (
        <div>
             <Button onClick={() => deleteBooking(booking._id)} slot="close">Confirm</Button>
        </div>
    );
};

export default CancelBookingBtn;