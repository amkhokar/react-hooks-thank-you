import React from "react";

const MessageList = () => {
  const allPersons = [
    {
      name: "Brian",
      message:
        "Thanks for being the peoples that stand for us to succeed in the world. It shows how big of people your are to be able to put so much of yourselves into allowing us to fulfill our dreams."
    },
    {
      name: "Skye",
      message:
        "Thank you both for being amazing supporters to us all. You absolutely did everything you could to help us and I am very grateful to have you both in my life!"
    },
    {
      name: "MARK",
      message: `Yow Thanks Ernest and Panatda!`
    },
    {
      name: "MERIA",
      message: `It's a bitter sweet moment that our classes are coming to an end. It has been very educational but a fun journey. I am going to miss you and thank you for all the help. You guys have been great teachers.`
    },
    {
      name: "JULIUS",
      message: `Thank you Ernest and Panatda for being a great teacher! Hoping to work with you in the future!`
    },
    {
      name: "CATHY",
      message: `Panatda and Ernest - Thank you so much for all the effort you showed for our cohort! As your first cohort I hope we weren't too much to handle. I know you guys will put all your love into Epicodus to make it a great place.`
    },
    {
      name: "DEREK",
      message: `I want to tell you that I have appreciated everything you've done for us. You understood the issues with the class and did your best to improve upon it. I will say that this class would not have been as awesome and you are also the one of the reasons I stayed. Thank you for everything.`
    },
    {
      name: "VICTORIA",
      message: `Panatda: Farts. Ernest: Thanks for supporting me in my React / C# journey.I resolved my vulnerabilities without breaking my project(again) with try #2!`
    },
    {
      name: "REGINA",
      message: `Panatda, I would like to say huge Thank You! You are hands down the best teacher / instructor / mentor I've ever had. And you've also been a wonderful friend who can listen and support.Your dedication, your passion and positive attitude that's what helped me to believe in myself. You brought Epicodus to the next level and made of it not just a boot camp but the place where everybody valued as an individual and have an exclusive approach. I know for sure one day your dream will come true and you will open your own company and it will be very very successful! I'm very happy to realize that my cohort was your very first one and you have certainly nailed it! I hope we all will stay in touch no matter what career path we'll take in the future! Ernest, unfortunately, we didn't have a chance to enjoy your company since the very beginning, but I'm super glad we've got to know you even if we are moving closer to the end of the program. You are such a cheerful, easygoing and kind person. I feel like you have a real talent to explain the material very easy and fun way which by the way helps so much! I know that you will find your dream job very soon and be very successful at it! I'm really happy that you are part of the wonderful Epicodus memories that I will cherish forever!`
    },
    {
      name: "KENNETH",
      message: `Thank you for dedicating your time and going beyond the job to steer us in the right direction.I appreciate the honesty, and effort you put into shaping us and our futures.I think the way you both treat people is exemplary, and that in my opinion is the main reason you are so respectable.I don’t think I would have nearly the same experience if I wasn’t so personal and vulnerable to the both of you.Once again, thank you for everything.`
    },
    {
      name: "MEL",
      message: `Holy cow! We're done with the course already? I'm going to miss you guys and everyone in class! You both are amazing people.Definitely keep in touch.Let's get together and catch up sometimes.`
    },
    {
      name: "AHMED",
      message:
        "You guys have given me direction in life, mentorship, and most importantly friendship. This program has meant the world to me, and I am going to keep bugging you guys forever. BWAHAHAHAHAH!"
    }
  ].sort((a, b) => b.name > a.name);
  return (
    <div>
      {allPersons.map(person => (
        <p
          key={
            person.name[0].toUpperCase() + person.name.slice(1).toLowerCase()
          }
        >{`${person.name[0].toUpperCase() +
          person.name.slice(1).toLowerCase()} : ${person.message}`}</p>
      ))}
    </div>
  );
};
export default MessageList;
