<template>
	<section id="info_phone" class="section">
		<div id="section4_layout">
			<div class="center_layout">
				<div class="message">
					<div class="contactBox">
						<p class="title_p">
							<a class="contact_a">CONTACT</a>
						</p>
					</div>
					<div class="textBox">
						<p class="end_ment_1"></p>
						<p class="end_ment_2"></p>
						<p class="end_ment_3"></p>
						<p class="end_ment_4"></p>
					</div>
				</div>

				<div class="phoneBox">
					<div class="selfBox self_address">
						<div class="self_img_box">
							<img src="../assets/marker.webp" alt="map" class="self_img_map" />
						</div>
						<div class="self_text">경기도 고양시 토당동 능곡역</div>
					</div>
					<div class="selfBox self_skill_1">
						<div class="skill_icon">
							<img src="../assets/php.webp" alt="php" />
							<img src="../assets/mysql.webp" alt="mysql" />
							<img src="../assets/html5.webp" alt="html5" />
							<img src="../assets/vue.webp" alt="vue" />
						</div>
					</div>
					<div class="selfBox self_skill_2">
						<div class="skill_icon">
							<img src="../assets/javascript.webp" alt="javascript" />
							<img src="../assets/jquery.webp" alt="jquery" />
							<img src="../assets/css3.webp" alt="css3" />
							<img src="../assets/scss.png" alt="scss" />
						</div>
					</div>
				</div>
			</div>

			<div id="footerDiv">
				<div>
					<a class="self_img_git" href="https://github.com/JounSunSin?tab=repositories" target="_blank" alt="GitHub"></a>
					<div>&copy; 2022 Web Front-end developer by jong sun Shin</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	mounted() {
		this.$typingMsg();
	},
};
</script>
