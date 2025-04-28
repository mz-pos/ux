import Alert from "../components/Alert.vue";
import { ref } from 'vue';
import { fn } from '@storybook/test';


const meta = {
    title: "Example/Alert", // 주소에 표기되는 제목
    component: Alert, // 사용한 컴포넌트 등록
    tags: ['autodocs'],
    argTypes: {
        // 컴포넌트의 props로 스토리북에서 조작할 수 있도록 설정
        isActive: { control: 'boolean' },
        title: { control: 'text' },
        content: { control: 'text' },
        successText: { control: 'text' },
        successFunction: { action: 'successFunction' },
    },
    args: {
        isActive: false,
        title: '알림',
        content: '이것은 기본 알림 메시지입니다.',
        successText: '확인',
    },
};

export default meta;


// "Alert를 버튼 클릭으로 열기" 예제

export const WithButton = {
    render: (args) => ({
        components: { Alert },
        setup() {
            const isActive = ref(args.isActive); // args의 상태를 리액티브로 바인딩
            const openAlert = () => {
                isActive.value = true;
            };
            const closeAlert = () => {
                isActive.value = false;
            };

            return { args, isActive, openAlert, closeAlert };
        },
        template: `
          <div>
            <button @click="openAlert" class="btn bg-primary btn--small">
              알림 열기
            </button>
            <Alert
                v-bind="args"
                :isActive="isActive"
                @close="closeAlert"
            />
          </div>
        `,
    }),
};
// 기본 Alert
export const Default = {
    args: {
        isActive: true,
    }
};

// 비활성화된 Alert
export const Inactive = {
    args: {
        isActive: false,
    },
};

// 커스텀 텍스트 Alert
export const CustomText = {
    args: {
        isActive: true,
        title: '커스텀 제목',
        content: '커스텀 내용입니다.<br>HTML 태그도 지원합니다.',
        successText: '닫기',
    },
};