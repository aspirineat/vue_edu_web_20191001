<template>
<div class="hello">
	<h2>* 실습 메뉴</h2>
	<br/>
	<h3>Step1: create vue project</h3>
    <ul>
		<li>
			<router-link to="/step1">프로젝트 생성</router-link>
		</li>
	</ul>	
    <h3>Step3: parent & child</h3>
    <ul>
		<li>
			<router-link to="/step3/props">Parent > child 데이터 전달</router-link>
		</li>
		<li>
			<router-link to="/step3/emit">Parent Event 호출</router-link>
		</li>
    </ul>
	<h3>Step4: Store</h3>
    <ul>
		<li>
			<router-link to="/step4/store">Store 사용하기</router-link>
		</li>
    </ul>
	<h3>Step5: Axios</h3>
    <ul>
		<li>
			<router-link to="/step5/axios">Axios 사용하기</router-link>
		</li>
    </ul>
	<h3>Step6: Font awesome</h3>
    <ul>
		<li>
			<a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">Font awesome start!</a>
		</li>
		<li>
			<router-link to="/step6/install">Font awesome 설치</router-link>
		</li>
		<li>
			<router-link to="/step6/fa">Font awesome 사용하기</router-link>
		</li>
    </ul>
	<h3>Step7: Issue</h3>
    <ul>
		<li>
			<router-link to="/step7/model">Store Model Link</router-link>
		</li>
		<li>
			<router-link to="/step7/change">Array/Object 값 변경</router-link>
		</li>
		<li>
			<router-link to="/step7/attr">v-bind:attr</router-link>
		</li>
		<li>
			<router-link to="/step7/key">v-bind:key Index</router-link>
		</li>
		<li>
			<router-link to="/step7/cw">computed & watch</router-link>
		</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
	padding: 10px;
	padding-left: 20px;
}
</style>
