<template>
    <section id="vue-app">
        <div>
            <!-- ������������� ���������� -->
            <h2>{{ title }}</h2>

            <!-- ������������ ���������� -->
            <input v-model="newItem" placeholder="������ ������� � ������" />
            <button @click="addItem">��������</button>

            <!-- �������� ��������� -->
            <p v-if="items.length === 0">������ ����</p>

            <!-- ����� ������� ������ -->
            <ul v-else>
                <li v-for="(item, index) in items" :key="index">
                    {{ index + 1 }}. {{ item }}
                    <button @click="removeItem(index)">�������</button>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('������� ���� ����(����������, ����������, ���� ����������������), ������� ������ �� ������ � �������� roadmap �� ����� �����');
const newItem = ref('');
const items = ref([
  'HTML',
  'CSS',
  'JavaScript',
  'Vue.js',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Git',
  'Webpack'
]);

const addItem = () => {
  if (newItem.value.trim() !== '') {
    items.value.push(newItem.value.trim());
    newItem.value = '';
  }
};

const removeItem = (index) => {
  items.value.splice(index, 1);
};
</script>

<style scoped>

    /* �������� ����� ������ */
    #vue-app {
        font-family: 'Segoe UI', Roboto, sans-serif;
        max-width: 600px;
        margin: 20px auto;
        padding: 25px;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

        /* ��������� */
        #vue-app h2 {
            color: #2d3436;
            margin-bottom: 20px;
            font-size: 1.8rem;
            font-weight: 600;
            text-align: center;
        }

        /* ���� ����� � ������ �������� */
        #vue-app input {
            padding: 12px 15px;
            border: 2px solid #dfe6e9;
            border-radius: 8px;
            width: 60%;
            font-size: 1rem;
            margin-right: 10px;
        }


        #vue-app button {
            padding: 12px 20px;
            background-color: #0984e3;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }



        /* ��������� � ������ ������ */
        #vue-app p {
            color: #636e72;
            text-align: center;
            margin-top: 20px;
            font-style: italic;
        }

        /* ������ ��������� */
        #vue-app ul {
            list-style: none;
            padding: 0;
            margin-top: 25px;
        }

        #vue-app li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            margin-bottom: 10px;
            background-color: #f5f6fa;
            border-radius: 8px;
            transition: transform 0.2s ease;
        }

            /* ������ ������� */
            #vue-app li button {
                padding: 8px 12px;
                background-color: #ff7675;
                color: white;
                border: none;
                border-radius: 6px;
                font-size: 0.9rem;
                cursor: pointer;
                transition: background-color 0.2s ease;
            }
</style>