import requestApi from '../utils/requestApi';

export const getAllSectionService = async projectId => {
	try {
		const respone = await requestApi({
			method: 'get',
			url: `section/${projectId}`,
		});
		return respone;
	} catch (error) {
		console.log(error.response);
		// return error.response;
	}
};

export const addSectionService = async newSection => {
	try {
		const respone = await requestApi({
			method: 'post',
			url: 'section',
			data: { ...newSection },
		});
		return respone;
	} catch (error) {
		console.log(error.response);
		// return error.response;
	}
};

export const updateTitleSectionService = async dataSection => {
	try {
		const respone = await requestApi({
			method: 'put',
			url: 'section/3',
			data: { ...dataSection },
		});
		return respone;
	} catch (error) {
		console.log(error.response);
		// return error.response;
	}
};

export const archiveSectionService = async sectionId => {
	try {
		const respone = await requestApi({
			method: 'put',
			url: 'section/2',
			data: { sectionId: sectionId },
		});
		return respone;
	} catch (error) {
		console.log(error.response);
		// return error.response;
	}
};

export const updateTaskOrderInSection = async data => {
	try {
		const respone = await requestApi({
			method: 'put',
			url: 'section',
			data: { taskOrder: data.newTaskOrder, sectionId: data.sectionId },
		});
		return respone;
	} catch (error) {
		console.log(error.response);
		// return error.response;
	}
};
