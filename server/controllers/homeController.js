export default () => ({
  showHome(req, res) {
    res.render('index', { title: 'Express with babel and HRM' });
  },
});
