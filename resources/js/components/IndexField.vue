<template>
	<div>
        <button :class="field.classes" @click="openModal = true">View {{ field.name }}</button>
		<portal to="modals" transition="fade-transition" v-if="openModal">
            <modal @modal-close="openModal = false">
                <div :class="field.modalClasses" class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="p-4">
                    {{ field.value }}
                    </div>
                </div>
            </modal>
		</portal>
	</div>
</template>

<script>
export default {
    props: ['resourceName', 'field'],
}
</script>
