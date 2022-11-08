import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
              <p>
        Note that you'll sometimes see this agreement referred to as a Terms of Use, User Agreement or Terms of Service agreement. These terms are interchangeable and refer to the same type of agreement.

The purpose of a Terms and Conditions agreement is to prevent misunderstandings between the business owner (you), and the consumer. The agreement helps you:

Protect your intellectual property
Avoid website abuse
Define the limits of your legal obligations to the consumer
Essentially, the T&C helps you run your business more effectively and with greater peace of mind.

This agreement forms the basis of an enforceable legal relationship. It tells anyone browsing your website, whether they are a casual visitor or an active client, what their legal responsibilities and rights are.
        </p>
            <Link to={'/register'}>Back</Link>
        </div>
    );
};

export default Terms;