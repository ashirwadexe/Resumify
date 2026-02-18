import { Briefcase, Loader2, Plus, Sparkles, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import api from '../configs/api';
import toast from 'react-hot-toast';

const ExperienceForm = ({data, onChange}) => {

    const { token } = useSelector(state => state.auth);
    const [generatingIndex, setGeneratingIndex] = useState(-1);

    // FUNCTON TO ADD ENHANCE JOB EXPERINCE IN RESUME USING AI
    const generateExperience = async (index) => {
        setGeneratingIndex(index);
        const experience = data[index];
        const prompt = `enhance my job description: "${experience.description}" for the position of ${experience.position} at ${experience.company}`;
        try {
            const {data} = await api.post('/api/ai/enhance-job-desc', 
                {userContent: prompt},
                {headers: {Authorization: token}}
            );
            updateExperince(index, "description", data.enhancedContent)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message);
        }
        finally {
            setGeneratingIndex(-1);
        }
    }

    // Function to add a new experince
    const addExperience = () => {
        const newExperience = {
            company: "",
            position: "",
            start_date: "",
            end_date: "",
            description: "",
            is_current: false,
        };

        onChange([...data, newExperience]);
    };

    // function to delete a experince
    const removeExperience = (index) => {
        const updated = data.filter((_, i) => i !== index);
        onChange(updated);
    };

    // FUNCTION TO UPDATE THE EXPERINCE 
    const updateExperince = (index, feild, value) => {
        const updated = [...data];
        updated[index] = {...updated[index], [feild]:value};
        onChange(updated);
    };



  return (
    <div className='space-y-6'>
        <div>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='flex items-center gap-2 text-lg font-semibold text-shadow-gray-900'>Professional Experinece</h3>
                    <p className='text-sm text-gray-500'>Add your job experience🐥</p>
                </div>
                <button 
                    onClick={addExperience}
                    className='flex items-center gap-2 px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors'
                >
                    <Plus className='size-4'/>
                    Add Experience
                </button>
            </div>
        </div>

        {/* WHEN WE DON'T HAVE A EXPERINCE WE WILL PROVIDE A EMPTY FORM TO ADD EXP and if we have an existing exp we will provide it to update*/}
        {data.length === 0 ? (
            <div className='text-center py-8 text-gray-500'>
                <Briefcase className='w-10 h-10 mx-auto mb-3 text-gray-300'/>
                <p>No work experience added yet.</p>
                <p className='text-xs'>Click "Add Experience" to get started.</p>
            </div>
        ): (
            <div className='space-y-4'>
                {data.map((experience, index) => (
                    <div key={index} className='p-4 border border-gray-200 rounded-lg space-y-3'>
                        <div className='flex justify-between items-start'>
                            <h4>Experience #{index+1}</h4>

                            {/* BUTTON TO DELETE AN EXPERINECE */}
                            <button
                                className='text-red-500 hover:text-red-700 transition-colors'
                                onClick={() => removeExperience(index)}
                            >
                                <Trash2 className='size-4'/>
                            </button>
                        </div>

                        <div className='grid md:grid-cols-2 gap-3'>
                            <input 
                                type="text"
                                placeholder='Company Name'
                                className='px-3 py-2 text-sm rounded-lg' 
                                value={experience.company || ""}
                                onChange={(e) => updateExperince(index, "company", e.target.value)}
                            />
                            <input 
                                type="text"
                                placeholder='Job Title'
                                className='px-3 py-2 text-sm rounded-lg' 
                                value={experience.position || ""}
                                onChange={(e) => updateExperince(index, "position", e.target.value)}
                            />
                            <input 
                                type="month"
                                className='px-3 py-2 text-sm rounded-lg' 
                                value={experience.start_date || ""}
                                onChange={(e) => updateExperince(index, "start_date", e.target.value)}
                            />
                            <input 
                                type="month"
                                className='px-3 py-2 text-sm rounded-lg disabled:bg-gray-100' 
                                disabled={experience.is_current}
                                value={experience.end_date || ""}
                                onChange={(e) => updateExperince(index, "end_date", e.target.value)}
                            />
                        </div>

                        <label className='flex items-center gap-2'>
                            <input 
                                type="checkbox"
                                checked={experience.is_current || false}
                                onChange={(e) =>{updateExperince(index, "is_current", e.target.checked ? true : false)}}
                                className='rounded border-gray-300 text-blue-600 focus:ring-blue-50'
                            />
                            <span className='text-sm text-gray-700'>Currently working here</span>
                        </label>

                        <div className='space-y-2'>
                            <div className='flex items-center justify-between'>
                                <label className=' text-sm font-medium text-gray-700'>Job Description</label>
                                <button 
                                    disabled={generatingIndex === index || !experience.position || !experience.company}
                                    onClick={() => generateExperience(index)}
                                    className='flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50'
                                >
                                    {generatingIndex === index ? (<Loader2 className='w-3 h-3 animate-spin'/>) : (<Sparkles className='w-3 h-3'/>)}
                                    {generatingIndex === index ? ("Loading...") : ("Enhance with AI")}
                                </button>
                            </div>
                            <textarea 
                                className='w-full text-sm px-3 py-2 rounded-lg resize-none'
                                placeholder='Describe your key responsibilities and achievements...'
                                rows={4}
                                value={experience.description || ""}
                                onChange={(e) => updateExperince(index, "description", e.target.value)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default ExperienceForm