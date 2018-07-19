/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import CKEditor from '../dist/ckeditor';

configure( { adapter: new Adapter() } );

describe( 'CKEditor Component + InlineEditor Build', () => {
	let wrapper;

	afterEach( () => {
		if ( wrapper ) {
			wrapper.unmount();
		}
	} );

	it( 'should initialize the InlineEditor properly', done => {
		wrapper = mount( <CKEditor editor={ InlineEditor } /> );

		setTimeout( () => {
			const component = wrapper.instance();

			expect( component.editor ).to.not.be.null;
			expect( component.editor.element ).to.not.be.null;

			done();
		} );
	} );
} );
