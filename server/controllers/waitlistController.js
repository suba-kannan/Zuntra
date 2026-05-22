import Waitlist from '../model/waitlistModel.js';

// Apply to CRED club / Check credit score
export const applyToClub = async (req, res) => {
  try {
    const { name, email, phone, pan, dob, pincode, income, employment } = req.body;

    if (!name || !email || !phone || !pan || !dob || !pincode || !income || !employment) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Check if user already checked / applied
    const existingApplication = await Waitlist.findOne({ email });
    if (existingApplication) {
      return res.status(200).json({
        success: true,
        message: 'You have already checked your credit score! Here is your saved score.',
        data: existingApplication,
        alreadyChecked: true,
      });
    }

    // Simulate credit score calculation (standard range 300 - 900)
    // We can base the score loosely on name length or just generate a random premium-leaning score.
    // Let's generate a score between 550 and 880 (so most people get realistic numbers, with some approved)
    const minScore = 550;
    const maxScore = 880;
    const creditScore = Math.floor(Math.random() * (maxScore - minScore + 1)) + minScore;

    let status = 'review';
    if (creditScore >= 750) {
      status = 'approved';
    } else if (creditScore < 620) {
      status = 'rejected';
    }

    const newApplication = new Waitlist({
      name,
      email,
      phone,
      pan,
      dob,
      pincode,
      income,
      employment,
      creditScore,
      status,
    });

    await newApplication.save();

    res.status(201).json({
      success: true,
      message: status === 'approved' 
        ? 'Congratulations! You are eligible for the CRED Club.' 
        : 'Your score has been retrieved. You have been added to our waitlist.',
      data: newApplication,
    });
  } catch (error) {
    console.error('Error applying to club:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Retrieve waitlist statistics
export const getStats = async (req, res) => {
  try {
    const totalCount = await Waitlist.countDocuments();
    const approvedCount = await Waitlist.countDocuments({ status: 'approved' });

    res.status(200).json({
      success: true,
      data: {
        totalApplicants: totalCount,
        approvedMembers: approvedCount + 15829104, // Add the baseline 15M members from CRED website
      },
    });
  } catch (error) {
    console.error('Error retrieving stats:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
