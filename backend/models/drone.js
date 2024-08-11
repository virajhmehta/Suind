import mongoose from 'mongoose';

const MaintenanceLogSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technician: {
    type: String,
    required: true,
  },
});

const DroneSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
  },
  flight_hours: {
    type: Number,
    required: true,
  },
  battery_status: {
    type: String,
    required: true,
  },
  last_known_location: {
    type: [Number],
    required: true,
  },
  current_mission: {
    type: String,
    required: true,
  },
  maintenance_logs: [MaintenanceLogSchema],
});

const Drone = mongoose.model('Drone', DroneSchema);
export default Drone;
