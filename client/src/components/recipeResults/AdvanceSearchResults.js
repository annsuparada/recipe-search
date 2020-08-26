import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getRecipes, getAdvanceRecipes } from '../../store/actions/index';
import RecipeCard from '../CardComponents/RecipeCard';
import { Spin, Alert } from 'antd';

const AdvanceSearchResults = () => {
    return ( 
        <div>
            AdvanceSearchResults
        </div>
     );
}
 
export default AdvanceSearchResults;