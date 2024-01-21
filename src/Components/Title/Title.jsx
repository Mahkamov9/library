import React from 'react'
import "./Title.css";
import plus from "../../Assets/Images/plus.svg";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    radius: '15px',
    boxShadow: 24,
    p: 4,
};


export default function Title() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="title">
            <div className="title_box">
                <h1>You’ve got <span className='title_p'>7 book</span>  </h1>
                <button onClick={handleOpen} className="creacte_btn_box">
                    <img src={plus} alt="Plus" />
                    <p>Create a book</p>
                </button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <h1>Create new book</h1>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    autoComplete="655651321321"
                                    name="isbn"
                                    required
                                    fullWidth
                                    id="isbn"
                                    label="Isbn"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        <Grid className='modal_btn'>
                            {/* <Button variant='contained' color='error' sm={6}>Close</Button> */}
                            <Button variant='contained' sm={6} >Create</Button>
                        </Grid>

                    </Box>
                </Modal>
            </div>
            <div className="title_box">
                <p className='title_text'>Your books today</p>
            </div>
        </div>
    )
}
