const [menu, setMenu] = useState([]);
const [friends, setFriends] = useState([]);
const [newsFeed, setNewsFeed] = useState([]);

{menu.map(item => <div key={item}>{item}</div>)}






useEffect(() => {
  get('/menu').then(res => setMenu(res.data));
}, []);

useEffect(() => {
  get('/friends').then(res => setFriends(res.data));
}, []);

useEffect(() => {
  get('/news-feed').then(res => setNewsFeed(res.data));
}, []);