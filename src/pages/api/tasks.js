export default function handler(req, res) {
    const tasks = [
      { id: 1, title: 'Interview', time: 'Sep 13, 08:30', done: true },
      { id: 2, title: 'Team Meeting', time: 'Sep 13, 10:30', done: true },
      { id: 3, title: 'Project Update', time: 'Sep 13, 13:00', done: false },
      { id: 4, title: 'Discuss Q3 Goals', time: 'Sep 13, 14:45', done: false },
      { id: 5, title: 'HR Policy Review', time: 'Sep 13, 16:30', done: false },
    ];
    res.status(200).json(tasks);
  }