<script src="Controller/cus_viewreply.js"></script>
const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload(true);
    window.location.replace('/');
  };