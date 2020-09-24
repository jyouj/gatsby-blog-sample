import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import NOT_FOUND_IMG from '../../static/notimage.png';
import '../styles/404.css';
import SEO from '../components/seo';

export default function NotFound() {
    return (
        <Layout>
            <SEO title="404 Not Found" description="ページが見つかりません" />
            <div>
                <h1>404 Not Found</h1>
                <Link to="/">トップページへ</Link>
            </div>
            <img src={NOT_FOUND_IMG} className="not-found-image" alt="not found" />
        </Layout>
    )
}