import $ from 'jquery';

const renderAbout=()=>{
    $('#home,#recipe,#contact').removeAttr('class');
    $('#about').attr('class','current');
    $('main').html(`
        <div id='aboutContainer'>
            <div id='aboutImg'>About Us</div>
            <div id='aboutDesc'>
                <span id='aboutText'>Difooding brought to you as an exquisite gateway to a fine collection of foods,
                and delicacies from all over the world and from all sort of ingridients. 
                Made with passion and precise attention to the smallest detail for all of our beloved users. 
                Whether you are here to look for inspiration for your next meal or just to look at our
                fine collection of mouth-watering dishes, we have it all here just for you. 
                After all, this is a place for all your Foody needs.
                </span>
            </div>
        </div>
    `);
};
export default renderAbout;