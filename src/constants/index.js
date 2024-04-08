import { designerGirl, hireDesinger, desingerInspiration } from './../assets';

export const GET_STARTED_FORM = [
    {
      title: `Welcome! Let's create your profile.`,
      description: `Let others get to know you better! You can do these later`,
    },
    {
      title: 'What brings you to Dribble?',
      description: `Select the options that best describes you. Don't worry, you can explore other options later.`
    }
]


export const GET_STARTED_FORM_PURPOSE = [
  {
      id : 1, 
      purpose : `I'm a designer looking to share my work`, 
      img : designerGirl, 
      isSelected : false,
  }, 
  {
      id : 2, 
      purpose : `I'm looking to hire a designer`, 
      img : hireDesinger, 
      isSelected : false, 
  }, 
  {
      id : 3, 
      purpose : `I'm looking for design inspiration`, 
      img : desingerInspiration, 
      isSelected : false, 
  }
]