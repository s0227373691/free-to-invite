import React, { useState } from 'react';
import styled from 'styled-components';
import BackDrop from './commom/backDrop';
import Select from './commom/baseTag/select';
import { Modal } from './styles/modals';
import menuList from '../lib/menuList.js';
const Test = (props) => {
    const TestComponent = (
        <>
            <Modal>
                {menuList[
                    menuList
                        .map((x) => x.primaryType)
                        .indexOf(props.primaryType)
                ].content.map((x) => {
                    if (x.minorType === props.minorType) {
                        x.value.map((x, i) => {
                            console.log(x);
                            <SelectOption key={i}>
                                <option value="" hidden>
                                    請選擇分類
                                </option>
                            </SelectOption>;

                            //    <option
                            //             value={'1'}
                            //             key={i}
                            //         >
                            //             {x.minorType}
                            //         </option>
                        });
                    }
                })}
            </Modal>
            <BackDrop setFunction={props.setOpen} />
        </>
    );
    return props.setOpen ? TestComponent : null;
};

const SelectOption = styled(Select)``;
export default Test;
