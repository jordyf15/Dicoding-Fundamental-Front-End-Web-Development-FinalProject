import $ from 'jquery';

const renderHome=()=>{
    $('main').html('');
    $('#recipe,#about,#contact').removeAttr('class');
    $('#home').attr('class','current');
    $('main').html(`
        <div id='homeContainer'>
            <span id='titleHome'>Difoodin<span id='homeTitleLogo'>g</span></span>
            <span id='homeFoodIcons'>
            <i class="fas fa-carrot"></i>
            <i class="fas fa-pepper-hot"></i>
            &nbsp;
            <i class="fas fa-bacon"></i>
            <i class="fas fa-fish"></i>
            &nbsp;
            <i class="fas fa-candy-cane"></i>
            <i class="fas fa-ice-cream"></i>
            &nbsp;
            <i class="fas fa-hamburger"></i>
            <i class="fas fa-pizza-slice"></i>
            </span>
            <span id='homeText'>A place for all your foody needs</span>
        </div>
    `);
};
export default renderHome;