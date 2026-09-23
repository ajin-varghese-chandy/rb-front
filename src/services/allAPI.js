import apiService from '../api/apiservices'

export const saveResumeAPI =  async (resumeDetails)=>{
    return await apiService('POST','/resumes',resumeDetails)
}

export const getResumeByIdAPI =  async (id)=>{
    return await apiService('GET',`/resumes/${id}`)
}

export const allResumeSAPI = async()=>{
    return await apiService('GET','/resumes',{})
}

export const deleteResumeAPI = async(id)=>{
    return await apiService('DELETE',`/resumes/${id}`)
}

export const downloadResumeAPI = async(resumeDetails)=>{
    return await apiService('POST','/downloads',resumeDetails);
}

export const getAllDownloadsResumeAPI = async()=>{
    return await apiService('GET','/downloads',[])
}