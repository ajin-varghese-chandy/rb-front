import React from 'react';
import { MdEditSquare } from 'react-icons/md'
import { FaXmark } from "react-icons/fa6";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import jobRole from '../assets/jobrole.json'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: '80vh',
  overflow: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Edit({ resumeData, setResumeData }) {
  const [open, setOpen] = React.useState(false);
  const [newSkill, setNewSkill] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addSkill = () => {
    if (newSkill.trim() && !resumeData.skills?.includes(newSkill.trim())) {
      setResumeData({ ...resumeData, skills: [...(resumeData.skills || []), newSkill.trim()] });
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setResumeData({ ...resumeData, skills: resumeData.skills.filter(skill => skill !== skillToRemove) });
  };

  return (
    <div>
      <button onClick={handleOpen} style={{ color: 'red' }} className='btn' > <MdEditSquare className='fs-3' />
        Edit CV
      </button>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>

            <div>
              <h3>Personal Details</h3>
              <div className="row p-3">
                <TextField value={resumeData.fullName} onChange={e => setResumeData({ ...resumeData, fullName: e.target.value })} id="standard-basic-name" label="FullName" variant="standard" />
                <TextField value={resumeData.location} onChange={e => setResumeData({ ...resumeData, location: e.target.value })} id="standard-basic-loc" label="Location" variant="standard" />
                <FormControl variant="standard" >
                  <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Choose Job Title"
                    value={resumeData.job || ""}
                    onChange={e => setResumeData({ ...resumeData, job: e.target.value })}
                  >
                    {
                      jobRole.jobRoles.map(job => (

                        <MenuItem key={job} value={job}>{job}</MenuItem>
                      ))
                    }

                  </Select>
                </FormControl>

              </div>
            </div>
            <div>
              <h3>Contact Details</h3>
              <div className="p-3 row">
                <TextField value={resumeData.email} onChange={e => setResumeData({ ...resumeData, email: e.target.value })} id="standard-basic-email" label="Email" variant="standard" />
                <TextField value={resumeData.phone} onChange={e => setResumeData({ ...resumeData, phone: e.target.value })} id="standard-basic-num" label="Contact Number" variant="standard" />
                <TextField value={resumeData.linkedin} onChange={e => setResumeData({ ...resumeData, linkedin: e.target.value })} id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
                <TextField value={resumeData.github} onChange={e => setResumeData({ ...resumeData, github: e.target.value })} id="standard-basic-github" label="Github Link" variant="standard" />

              </div>
            </div>

            <div>
              <h3>Educational Details</h3>
              <div className="p-3 row">
                <TextField value={resumeData.degree} onChange={e => setResumeData({ ...resumeData, degree: e.target.value })} id="standard-basic-digree" label="Bachelor's Degree" variant="standard" />
                <TextField value={resumeData.college} onChange={e => setResumeData({ ...resumeData, college: e.target.value })} id="standard-basic-collage" label="College / University Name" variant="standard" />
                <TextField value={resumeData.year} onChange={e => setResumeData({ ...resumeData, year: e.target.value })} id="standard-basic-year" label="Year of Graduation" variant="standard" />

              </div>
            </div>
            {/* skill */}
            <div>
              <h3>Skills</h3>
              <div className="d-flex p-3 gap-2">
                <input
                  type="text"
                  placeholder="Add New Skill"
                  className="form-control"

                  onChange={(event) => setNewSkill(event.target.value)}
                  onKeyDown={(event) => event.key === 'Enter' && addSkill()}
                />
                <Button style={{ color: '#714a2f' }} onClick={addSkill}>Add</Button>
              </div>
              <h6>Added Skills:</h6>
              <div className="p-3 d-flex justify-content-between flex-wrap gap-1">
                {(resumeData.skills || []).map((skill) => (
                  <Button
                    key={skill}
                    variant="contained"
                    sx={{ backgroundColor: '#b19596' }}
                    className="my-1"
                    onClick={() => removeSkill(skill)}
                  >
                    {skill} <FaXmark className="ms-2" />
                  </Button>
                ))}
              </div>

            </div>
            <div className='p-3 row'>
              <TextField style={{ width: '100%' }} value={resumeData.summary} onChange={e => setResumeData({ ...resumeData, summary: e.target.value })} id="standard-basic-name" label="summary" variant="standard" />

            </div>

          </Box>
        </Box>
      </Modal>


    </div>
  )
}

export default Edit
