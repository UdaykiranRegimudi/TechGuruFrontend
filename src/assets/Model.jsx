import * as React from 'react';
import Box from '@mui/material/Box';
import { useUser } from '@clerk/clerk-react';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Model({data,SubmitData}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {user} = useUser()

  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    section: '',
    year: '',
    email:user.emailAddresses[0].emailAddress,
    date:new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    SubmitData(formData)
    handleClose();
  };

  return (
    <div>
      <button className="btn btn-outline-light" onClick={handleOpen}>{data}</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='rounded-md'>
        <form onSubmit={handleSubmit}>
            <div style={{ borderRadius:"10px"}} >
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                required
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Branch:</label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                required
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Section:</label>
              <input
                type="text"
                name="section"
                value={formData.section}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                required
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Year:</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                required
              />
            </div>
            <div className='text-center'>
              <button
                type="submit"
                className='btn btn-primary text-center'
              >
                Register Event
              </button>
            </div>
        </form>
        </Box>
      </Modal>
    </div>
  );
}