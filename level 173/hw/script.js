import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async () => setUsers(await (await fetch('/api/users')).json()))();
  }, []);

  return <div>{users ? 'Data Loaded' : 'Loading...'}</div>;
}