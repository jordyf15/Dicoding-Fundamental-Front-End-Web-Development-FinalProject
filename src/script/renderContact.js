import $ from 'jquery';
import './custom-elements/ContactItem.js';
const renderContact=()=>{
    $('#contact,#about,#recipe').removeAttr('class');
    $('#contact').attr('class','current');
    $('main').html(`
    <div id='contactContainer'>
        <div id='contactTitleContainer'>
            <span id='contactTitle'>Hello</span>
            <span id='contactSubTitle'>Want to get in touch or find out more about me? Here's where you can find out more about me.</span>
        </div>
            <div id='contactList'>
        </div>
    </div>
    `);
    const github=document.createElement('contact-item');
    github.contact={icon: 'fab fa-github',title:'Github',desc:'Curious on what kind of other project i made? Just drop by to my github profile and see it for yourself.',url: 'https://github.com/jordyf15'};
    $('#contactList').append(github);
    const linkedIn=document.createElement('contact-item');
    linkedIn.contact={icon: 'fab fa-linkedin-in',title: 'LinkedIn', desc:'Interested in working together with me? Just visit and check my linkedin profile, i\'m still a university student though.', url:'https://www.linkedin.com/in/jordy-ferdian-3606041a7/'};
    $('#contactList').append(linkedIn);

};
export default renderContact;