<?php namespace App\Http\Controllers;

class SiteController extends Controller {

    public function __construct() {
        parent::__construct();
    }

    /**
     * Method to display index page.
     *
     * @return Response
     */
    public function index() {
        return view('site.pages.' . __FUNCTION__);
    }
}
