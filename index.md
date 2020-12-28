<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no,maximum-scale=1,minimum-scale=1"/>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Teste Gran Cursos</title>
		<link rel="icon" type="image/x-icon" href="images/icon.png">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<!-- Bootstrap CSS -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
		<script src="https://kit.fontawesome.com/700f877c3b.js" crossorigin="anonymous"></script>
	</head>
	<body>
		<div class="container-fluid">
			<div class="row">
				<button class="navbar-toggler position-absolute d-md-none collapsed botao-mobile" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
					<i class="fas fa-bars"></i>
				</button>

				<nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
					<a class="nav-logo" href="#">
						<img src="images/Logo.png" width="170" alt="">
					</a>
					<div class="position-sticky pt-3">
						<ul class="nav flex-column">
							<li class="nav-item active">
								<a class="nav-link" aria-current="page" href="#">
									<i class="fas fa-home fa-size"></i>
									Dashboard
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="far fa-circle fa-size"></i>
									E-commerce
								</a>
							</li>
						</ul>

						<p><strong>APPS</strong></p>
						<ul class="nav flex-column">
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="far fa-envelope fa-size"></i>
									Email
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="far fa-comment-alt fa-size"></i>
									Chat
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="far fa-check-square fa-size"></i>
									To do
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="far fa-calendar fa-size"></i>
									Calendar
								</a>
							</li>
						</ul>

						<p><strong>UI ELEMENTS</strong></p>
						<ul class="nav flex-column">
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="fas fa-border-all fa-size"></i>
									Grid
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="fas fa-tint fa-size"></i>
									Color
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="far fa-credit-card fa-size"></i>
									Card
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="fas fa-table fa-size"></i>
									Table
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="fas fa-archive fa-size"></i>
									Components
								</a>
							</li>
						</ul>

						<p><strong>FORMS</strong></p>
						<ul class="nav flex-column">
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="far fa-clone fa-size"></i>
									Form Elements
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="fab fa-elementor fa-size"></i>
									Form Layouts
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="far fa-file-alt fa-size"></i>
									Form Wizard
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="far fa-check-circle fa-size"></i>
									Form Validation
								</a>
							</li>
						</ul>
					</div>
				</nav>

				<main class="main-content col-md-9 ms-sm-auto col-lg-10 p-md-4">
					<div class="navbar navbar-expand-lg navbar-top-menu">
						<div class="container-fluid">
							<div class="top-menu">
								<div class="top-menu-esquerda">
									<ul class="navbar-nav me-auto mb-2 mb-lg-0">
										<li class="nav-item">
											<i class="far fa-check-square f20"></i>
										</li>
										
										<li class="nav-item">
											<i class="far fa-comment-alt f18"></i>
										</li>
										
										<li class="nav-item">
											<i class="far fa-envelope f21"></i>
										</li>
										
										<li class="nav-item">
											<i class="far fa-calendar f18"></i>
										</li>
										
										<li class="nav-item">
											<i class="far fa-star f20"></i>
										</li>
									</ul>
								</div>
								<div class="top-menu-direita">
									<ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
										<li class="nav-item">
											<a class="nav-link active" aria-current="page" href="#">English</a>
										</li>
										<li class="nav-item">
											<i class="far fa-bell f20"></i>
										</li>
										<li class="nav-item">
											<i class="fas fa-search f20"></i>
										</li>
										<li class="nav-item dropdown">
											<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
												<p>
													Camilla Binni<br/>
													<span>Avaliable</span>
												</p>
												<i class="fas fa-user f21"></i>
											</a>
											<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
												<li><a class="dropdown-item" href="#">Meu Perfil</a></li>
												<li><a class="dropdown-item" href="#">Meus Dados</a></li>
												<li><hr class="dropdown-divider"></li>
												<li><a class="dropdown-item" href="#">Sair</a></li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="breadcrumbs">
						<div class="breadcrumbs-top">
							<h2>Card Action</h2>
							<nav aria-label="breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
									<li class="breadcrumb-item"><a href="#">eCommerce</a></li>
									<li class="breadcrumb-item active" aria-current="page">Electronics</li>
								</ol>
							</nav>
						</div>
						<div class="configuracao d-flex align-items-center">
							<p class="m-0"><i class="fas fa-cog"></i></p>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-3 filters-side">
							<div class="results d-flex align-items-end">
								<h1 class="mb-mb-0">Filters</h1>
							</div>

							<div class="filters">
								<div class="range">
									<h3 class="mt-0">Multi Range</h3>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
										<label class="form-check-label" for="flexRadioDefault1">
											$10
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
										<label class="form-check-label" for="flexRadioDefault2">
											$10 - $100
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
										<label class="form-check-label" for="flexRadioDefault3">
											$100 - $500
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked>
										<label class="form-check-label" for="flexRadioDefault4">
											$500
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" checked>
										<label class="form-check-label" for="flexRadioDefault5">
											All
										</label>
									</div>
								</div>

								<div class="slider-range">
									<div class="d-flex justify-content-between">
										<div>
											<h3>Slider</h3>
										</div>
										
										<div>
											<h3>
												<span class="value-output-from" id="value-output-from">1000</span>
												<span>-</span>
												<span class="value-output-to" id="value-output-to">4098</span>
											</h3>
										</div>
									</div>
									<div class="slider-blue">
										<input type="text" value="" class="slider form-control" data-slider-min="0" data-slider-max="5000"
												 data-slider-step="1" data-slider-value="[1000,4050]" data-slider-orientation="horizontal"
												 data-slider-selection="before" data-slider-tooltip="hide">
									</div>
								</div>

								<div class="categories">
									<h3>Category</h3>

									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>Cell Phones</span> <span>1920</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>Computers & Tablets</span> <span>1820</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>Cell Phone Accessories</span> <span>462</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>Appliances</span> <span>6556</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>Audio</span> <span>120</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>iPhone Accessories</span> <span>353</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>Cameras & Camcorders</span> <span>45</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>iPhone Cases & Clips</span> <span>456</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>TV & Home Theater</span> <span>55</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>Small Kitchen Appliances</span> <span>10</span>
										</label>
									</div>
								</div>

								<div class="brand">
									<h3>Brand</h3>

									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>Insigni</span> <span>220</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>Samsung</span> <span>120</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>Apple</span> <span>320</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>HP</span> <span>32</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>Sony</span> <span>520</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>Metra</span> <span>55</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>Dyne</span> <span>120</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>LG</span> <span>98</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>Canon</span> <span>99</span>
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
										<label class="form-check-label" for="flexCheckDefault">
											<span>Speck</span> <span>575</span>
										</label>
									</div>
								</div>

								<div class="rating">
									<h3>Rating</h3>

									<p>
										<span>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											& Up
										</span>
										<span>8500</span>
									</p>
									<p>
										<span>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="far fa-star"></i>
											& Up
										</span>
										<span>3250</span>
									</p>
									<p>
										<span>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="fas fa-star"></i>
											<i class="far fa-star"></i>
											<i class="far fa-star"></i>
											& Up
										</span>
										<span>1120</span>
									</p>
								</div>
							</div>

							<div class="clear-filter">
								<a href="#" title="">Clear All Filters</a>
							</div>
						</div>
						<div class="col-lg-9">
							<div class="results">
								<div class="row  align-items-end">
									<div class="col-lg-8 col-xl-9">
										<h1>7,618 results found in 5ms</h1>
									</div>
									<div class="col-lg-4 col-xl-3">
										<div class="d-flex align-items-center setting-search">
											<select class="form-select" aria-label="Default select example">
												<option selected>Default</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</select>
											<span><i class="fas fa-th-large"></i></span>
											<span><i class="fas fa-bars"></i></span>
										</div>
									</div>
								</div>
							</div>

							<div class="input-search input-group">
								<input type="text" class="form-control search" placeholder="Search hear" aria-label="Search hear" aria-describedby="basic-addon2">
							</div>

							<div class="produtos">
								<div class="produto">
									<div class="row">
										<div class="col-lg-9 produto-dados">
											<img src="images/image.png" alt="Imagem">
											
											<div class="produto-sobre">
												<h5>Apple Watch Series 4 GPS</h5>
												<h6>By <strong>Apple</strong></h6>

												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</div>
										</div>
										<div class="col-lg-3 produto-preco">
											<div class="produto-rating">
												<p>3.4 <i class="far fa-star"></i></p>
											</div>
											<h5>$399</h5>
											<p><i class="fas fa-shopping-cart fa-size"></i> Free Shipping</p>

											<a href="#" title="" class="botao-wishlist"><i class="fas fa-heart"></i> WISHLIST</a>
											<a href="#" title="" class="botao-add-cart"><i class="fas fa-shopping-basket"></i> ADD TO CART</a>
										</div>
									</div>
								</div>

								<div class="produto">
									<div class="row">
										<div class="col-lg-9 produto-dados">
											<img src="images/image.png" alt="Imagem">
											
											<div class="produto-sobre">
												<h5>JBL Speaker</h5>
												<h6>By <strong>JBL</strong></h6>

												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</div>
										</div>
										<div class="col-lg-3 produto-preco">
											<div class="produto-rating">
												<!-- <p>3.4 <i class="far fa-star"></i></p> -->
											</div>
											<h5>$199</h5>
											<p><i class="fas fa-shopping-cart fa-size"></i> Free Shipping</p>

											<a href="#" title="" class="botao-wishlist"><i class="fas fa-heart"></i> WISHLIST</a>
											<a href="#" title="" class="botao-add-cart"><i class="fas fa-shopping-basket"></i> ADD TO CART</a>
										</div>
									</div>
								</div>
								
								<div class="produto">
									<div class="row">
										<div class="col-lg-9 produto-dados">
											<img src="images/image.png" alt="Imagem">
											
											<div class="produto-sobre">
												<h5>Apple iPhone X 128GB</h5>
												<h6>By <strong>Apple</strong></h6>

												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</div>
										</div>
										<div class="col-lg-3 produto-preco">
											<div class="produto-rating">
												<!-- <p>3.4 <i class="far fa-star"></i></p> -->
											</div>
											<h5>$899</h5>
											<p><i class="fas fa-shopping-cart fa-size"></i> Free Shipping</p>

											<a href="#" title="" class="botao-wishlist"><i class="fas fa-heart"></i> WISHLIST</a>
											<a href="#" title="" class="botao-add-cart"><i class="fas fa-shopping-basket"></i> ADD TO CART</a>
										</div>
									</div>
								</div>
								
								<div class="produto">
									<div class="row">
										<div class="col-lg-9 produto-dados">
											<img src="images/image.png" alt="Imagem">
											
											<div class="produto-sobre">
												<h5>Beats Headphones</h5>
												<h6>By <strong>Beats</strong></h6>

												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</div>
										</div>
										<div class="col-lg-3 produto-preco">
											<div class="produto-rating">
												<!-- <p>3.4 <i class="far fa-star"></i></p> -->
											</div>
											<h5>$459</h5>
											<p><i class="fas fa-shopping-cart fa-size"></i> Free Shipping</p>

											<a href="#" title="" class="botao-wishlist"><i class="fas fa-heart"></i> WISHLIST</a>
											<a href="#" title="" class="botao-add-cart"><i class="fas fa-shopping-basket"></i> ADD TO CART</a>
										</div>
									</div>
								</div>
								
								<div class="produto">
									<div class="row">
										<div class="col-lg-9 produto-dados">
											<img src="images/image.png" alt="Imagem">
											
											<div class="produto-sobre">
												<h5>Apple Watch Series 4 GPS</h5>
												<h6>By <strong>Apple</strong></h6>

												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</div>
										</div>
										<div class="col-lg-3 produto-preco">
											<div class="produto-rating">
												<p>3.4 <i class="far fa-star"></i></p>
											</div>
											<h5>$399</h5>
											<p><i class="fas fa-shopping-cart fa-size"></i> Free Shipping</p>

											<a href="#" title="" class="botao-wishlist"><i class="fas fa-heart"></i> WISHLIST</a>
											<a href="#" title="" class="botao-add-cart"><i class="fas fa-shopping-basket"></i> ADD TO CART</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="paginacao">
						<nav aria-label="Page Navigation">
							<ul class="pagination">
								<li class="page-item prev">
									<a class="page-link" href="#" aria-label="Previous">
										<i class="fas fa-chevron-left"></i>
									</a>
								</li>

								<li class="page-item"><a class="page-link active" href="#">1</a></li>
								<li class="page-item"><a class="page-link" href="#">2</a></li>
								<li class="page-item"><a class="page-link" href="#">3</a></li>

								<li class="page-item next">
									<a class="page-link" href="#" aria-label="Next">
										<i class="fas fa-chevron-right"></i>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</main>
			</div>
		</div>

		<script src="js/jquery.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
	    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
		<!-- Bootstrap slider -->
		<script src="js/bootstrap-slider/bootstrap-slider.min.js"></script>

		<script>
			$('.slider').bootstrapSlider({
				step: 0.01
			});
			$('.slider').on('slide', function (ev) {
				var str = this.value;
				var str_split = str.split(",");

				$('#value-output-from').html("");
				$('#value-output-from').html(str_split[0]);
				$('#value-output-to').html("");
				$('#value-output-to').html(str_split[1]);
			});
		</script>
	</body>
</html>