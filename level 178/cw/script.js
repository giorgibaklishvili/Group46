//Presentational ეს არის კომპონენტის body მან იცის მხოლოდ ის, თუ როგორ გამოჩნდეს ეკრანზე.
//Container ეს არის კომპონენტის brain მან იცის, საიდან მოიტანოს მონაცემები.


const WelcomeMessage = ({ name }) => {
  return <h1>hello {name}!</h1>;
};



const WelcomeContainer = () => {
  const currentUserName = "გიორგი"; 

  return <WelcomeMessage name={currentUserName} />;
};



//State Lifting არის მიდგომა React-ში, როდესაც ორი ან მეტი კომპონენტი ერთმანეთს შორის მონაცემებს ცვლის.