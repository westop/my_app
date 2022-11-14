import React from 'react';
import MyInput from './UI/Input/MyInput';
import MySelect from './UI/Select/MySelect';


const PostFilter = ({filter, setFilter}) => {
      return (
            <div>
        <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter,query: e.target.value})}
          placeholder="Search"
        >

        </MyInput>
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Sorting"
          options={[
            { value: 'title', name: 'To Name' },
            { value: 'body', name: 'To Descriptions' },
          ]}
        />
      </div>
      );
};

export default PostFilter;