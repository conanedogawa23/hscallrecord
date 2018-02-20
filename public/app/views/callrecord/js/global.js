
jQuery(document).ready(function(){
		
	/* mmenu */
	//jQuery('nav#mmenu').mmenu();
	
	/********************************/
	jQuery('html').click(function() {
		jQuery('.cogTabs').hide();
		jQuery('.propSow').hide();
		jQuery('.showMore').hide();
		jQuery('.showMe').hide();
	})

	jQuery('.searchBox, .userBox, .profile').click(function(e){
		e.stopPropagation();
	});

	jQuery('.fa-cog').click(function(e) {
		jQuery('.cogTabs').slideToggle();
	});
	
	jQuery('.cogTabs li .fa-close').click(function(e) {
		jQuery(this).parent().slideToggle('hide');
	});

	jQuery('.prop').click(function(e) {
		jQuery('.propSow').slideToggle();
	});
	
	jQuery('.clickMore').click(function(e) {
		jQuery('.profileOverview .profile li a.clickMore').toggleClass('actives');		
	});
	
	jQuery('.tabContent .clickThis').click(function(e) {
		jQuery(this).toggleClass('actives');		
	});
	
	
	
	/******************************************/
	
	jQuery('.leftToggle').click(function() {
		jQuery('.leftSide').toggleClass('active');
		jQuery('.rightSide').toggleClass('active');
	});
	
	jQuery('.searchBox .nav li a').click(function() {
		jQuery(this).tab('show');
	});
	jQuery('.leftCont .panel-heading.active ul li ul li a').click(function() {
		jQuery('.leftCont .panel-heading.active ul li a.fa.modifies').hide('');
		jQuery('.leftCont .panel-heading.active ul li a.fa-spinner.record').show('');
		jQuery(this).tab('show');
	});
	
	
	jQuery('.contactForm input.saveBtn, .contactForm a.cancelBtn').click(function() {
		jQuery('.contactForm .forms.active').removeClass('active');
		jQuery('.leftCont .panel-heading.active ul li a.fa.modifies').show('');
		jQuery('.leftCont .panel-heading.active ul li a.fa-spinner.record').hide('');
	});
	jQuery('.contactForm .modal.active, .contactForm .modal-header .close').click(function() {
		jQuery('.leftCont .panel-heading.active ul li a.fa.modifies').show('');
		jQuery('.leftCont .panel-heading.active ul li a.fa-spinner.record').hide('');
	});
	
	jQuery('.topCol .fa-heart').click(function() {
		jQuery(this).toggleClass('active');
		
	});
	
	jQuery('.leftCont .panel-heading').click(function() {
      jQuery(".leftCont .panel-heading").removeClass("active");
	jQuery(this).addClass('active');	  
	});
	
	jQuery('.showMore li .fa-close').click(function() {
		jQuery(this).parent().addClass('hidd');	  
	});
	
	jQuery('.profile li .fa-minus-square').click(function() {
		jQuery(this).parent().parent().parent().addClass('hidd');	  
	});
	
	
	
	jQuery('.tableLay li a.deletes').click(function() {
		jQuery(this).parent().parent().parent().parent().hide('');	  
	});
	
	jQuery('.profileOverview .selectForm a').click(function() {
		jQuery(this).tab('show');	  
	});
	
	jQuery('.headUl li .fa-minus-square').click(function() {
		jQuery(this).parent().parent().addClass('hidd');	  
	});
	jQuery('.samGroup .headUl li .closeLi').click(function() {
		jQuery('.samGroup .samCont > ul > li').toggleClass('active');	  
		jQuery('.samGroup .headUl li .closeLi').toggleClass('active');	  
	});
	
	jQuery('.rightCont .panel-heading').click(function() {
      jQuery(".rightCont .panel-heading").removeClass("active");
	jQuery(this).addClass('active');	  
	});
	
	jQuery('.rightContClose').click(function() {
		jQuery('.leftCont').toggleClass('active');
		jQuery('.rightCont').slideToggle('hide');
	});
	
	jQuery('.leftCont .communication ul ul li span').click(function() {
		jQuery(this).toggleClass('active');
	});
	
	jQuery('.communication .addBtn').click(function() {
		jQuery('.addCommunications').toggleClass('active');
		jQuery('.communication .editBtn').hide('');
	});
	jQuery('.communication .editBtn').click(function() {
		jQuery('.modifyCommunications').toggleClass('active');
		jQuery('.fillbox').slideToggle('hide');
		jQuery('.buttonRight').slideToggle('hide');
	});
	jQuery('.modifyCommunications .saveBtn, .modifyCommunications .cancelBtn').click(function() {
		jQuery('.fillbox').slideToggle('show');
		jQuery('.buttonRight').slideToggle('show');
		jQuery('.modifyCommunications').slideToggle('show');
	});
	
	jQuery('.fa-toggle-on').click(function() {
		jQuery(this).toggleClass('fa-flip-horizontal');
		
	});
	
	jQuery('.samCont li').click(function() {
		jQuery('.samCont li').removeClass('active');
		jQuery(this).addClass('active');
		
	});
	
	/*jQuery('#Research_fields #Default_Values').click(function() {
		jQuery('#Research_fields input[type=checkbox]').prop('checked');	
	});*/
	
	jQuery('.papp.buttonRight .editBtn').click(function() {
		jQuery('.pappCont').slideToggle('hide');
		jQuery('.pappContEdit').addClass('pappCont');
		jQuery('.papp.buttonRight').addClass('active');
		jQuery(this).hide('');
		
	});
	
	jQuery('.papp.buttonRight .saveBtn, .papp.buttonRight .cancelBtn').click(function() {
		jQuery('.pappCont').slideToggle('show');
		jQuery('.pappContEdit').removeClass('pappCont');
		jQuery('.papp.buttonRight').removeClass('active');
		jQuery('.papp.buttonRight .editBtn').show('');
		
	});
		
  
  /************ Animation End *******/
  
  
	jQuery('.scrolTop').click(function(){
		jQuery("html, body").animate({ scrollTop: 0 },600);
		return false;
	});
	

	/* sticky */
	var target = jQuery('#headerWrapper').offset().top;

	    jQuery(window).scroll(function() {

	    if (jQuery(window).scrollTop() > target) {

	    jQuery('#headerWrapper').addClass('sticky');

	    } else {

	    jQuery('#headerWrapper').removeClass('sticky');       
	    }

	 });
	 
	 
});