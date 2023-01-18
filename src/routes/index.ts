import express from 'express'
import UserRoutes from './UserRoutes/UserRoutes'
import activitiesRoutes from './ActivityRoutes/ActivityRoutes'
import userActivitiesRoutes from './UserInformationRoutes/UserInformationRoutes'

const router = express.Router();

router.use('/users', UserRoutes);
router.use('/activities', activitiesRoutes);
router.use('/user-activities', userActivitiesRoutes);

export default router;